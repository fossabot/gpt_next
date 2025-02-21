<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import html2canvas from 'html2canvas'
import { uid } from 'uid'
import EditSessionSettingsDialog from './EditSessionSettingsDialog.vue'
import useConversationStore from '@/store/conversation-store'
import Dialog from '@/ui/Dialog.vue'
import MessageSpeech from '@/components/MessageSpeech.vue'
import { expandLeftSideBar } from '@/store/localstorage'
import useChatCompletionStore from '@/store/chat-completion-store'

const events = defineEmits([
  'onUpdateMessageList',
])

const { t } = useI18n()

const conversationStore = useConversationStore()

const openConfirmDialog = ref<boolean>(false)

function onOpenLeftSideBar() {
  expandLeftSideBar.value = true
}

function openDialog() {
  openConfirmDialog.value = true
}

function closeDialog() {
  openConfirmDialog.value = false
}

async function clearMessageRecords() {
  const chatCompletionStore = useChatCompletionStore()
  if (!chatCompletionStore.chatCompletionHandler)
    return

  const result = await chatCompletionStore.chatCompletionHandler.clearMessageByConversationIdAsync()
  if (result) {
    events('onUpdateMessageList')
    openConfirmDialog.value = false
  }
}

function exportConversation() {
  html2canvas(document.getElementById('conversation-body')!, {
    allowTaint: true,
  }).then((canvas: HTMLCanvasElement) => {
    const downloadLink = document.createElement('a')
    downloadLink.href = canvas.toDataURL()
    downloadLink.download = String(uid(32))
    downloadLink.click()
  })
}
</script>

<template>
  <div
    id="body-header" class="h-79px flex flex-row text-6 color-base border-base overflow-hidden gap-2" b="0 b-1 solid"
    p="x-24px"
  >
    <div v-if="expandLeftSideBar === false" class="flex flex-col m-r-4">
      <div class="flex-1" />
      <div data-cursor="block" class="icon-button i-carbon-menu" @click="onOpenLeftSideBar" />
      <div class="flex-1" />
    </div>
    <div class="flex-1 flex flex-col overflow-hidden">
      <div class="flex-1" />
      <div class="truncate text-5 font-bold">
        {{ conversationStore.conversationInfo?.title }}
        <div class="flex-1" />
      </div>
      <div
        v-if="conversationStore.conversationInfo?.description && conversationStore.conversationInfo?.description!.trim().length > 0"
        class="text-3 color-fade m-t1 overflow-hidden truncate"
      >
        {{ conversationStore.conversationInfo?.description! }}
      </div>
      <div class="flex-1" />
    </div>
    <div class="flex flex-col">
      <div class="flex-1" />
      <div v-if="((conversationStore.conversationInfo?.type ?? 'chat') !== 'dataworker')" class="flex flex-row gap-2">
        <EditSessionSettingsDialog v-if="conversationStore.conversationInfo">
          <div
            data-cursor="block" class="icon-button i-carbon-audio-console w-22px h-22px"
            :title="t('conversation_edit')"
          />
        </EditSessionSettingsDialog>
        <div
          v-if="conversationStore.conversationInfo && (conversationStore.conversationInfo?.type ?? 'chat') === 'chat'"
          data-cursor="block" class="w-22px h-22px icon-button i-carbon-save-series" :title="t('export')"
          @click="exportConversation()"
        />
        <div
          v-if="conversationStore.conversationInfo" data-cursor="block"
          class="w-22px h-22px icon-button i-carbon-clean" :title="t('conversation_clear')" @click="openDialog"
        />
      </div>
      <div class="flex-1" />
    </div>

    <MessageSpeech />

    <Dialog :open="openConfirmDialog" :title="t('session_clear_title')" @on-close="closeDialog">
      <div class="text-4">
        {{ t('session_clear_desc') }}
        <br>
        <span class="color-red">{{ t('session_clear_warning') }}</span>
      </div>
      <div class="flex flex-1 m-t-2">
        <div class="flex-1" />
        <button
          data-cursor="block" class="outline-none border-base color-red bg-body hover-bg-base" b="1 solid rd-1"
          p="x-4 y-2" @click="clearMessageRecords"
        >
          {{ t('clear') }}
        </button>

        <button
          data-cursor="block" class="outline-none border-base bg-body hover-bg-base color-base m-l-2"
          b="1 solid rd-1" p="x-4 y-2" @click="closeDialog"
        >
          {{ t('cancel') }}
        </button>
      </div>
    </Dialog>
  </div>
</template>
