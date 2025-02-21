export default {
  basic: {
    reload: '刷新',
  },
  chatCompletions: {
    payloadError: '请先设置 Api Key 和 Chat Model.',
  },
  chatParameterList: {
    title: '参数预设',
    custom: '自定义',
    codeGeneration: '代码生成',
    creativeWriting: '创意写作',
    chatbotResponses: '聊天机器人回复',
    codeCommentGeneration: '代码注释生成',
    dataAnalysisScripting: '数据分析脚本',
    exploratoryCodeWriting: '探索性代码编写',
  },
  functionCallingList: {
    author: '作者',
    function_name: '函数名称',
    function_description: '函数描述',
    get_current_weather: '天气查询',
    current_weather_description: '根据用户输入的地区获取当前或未来的天气.',
    search_photo_from_unsplash: '搜索图片',
    search_photos_from_unsplash_desc: '根据用户输入的关键词在Unsplash搜索图片.',
  },
  messageRecord: {
    message_cancel: '消息已取消',
    message_error: '消息错误',
  },
  editMessage: {
    success: '编辑消息成功!',
    failed: '编辑消息失败!',
  },
  dataWork: {
    create_data_work_error: '创建数据工作流失败!',
    no_data_columns: '没有找到相关数据列！',
    update_message_failed: '更新消息失败!',
    update_message_success: '更新消息成功!',
    add_modification_suggestion_failed: '添加修改建议失败!',
    add_modification_suggestion_success: '添加修改建议成功!',
  },
  drawImg: {
    failed: '生成图片失败! 请稍后重新尝试。',
    loading_hint: '正在生成图片...',
    prompt_empty_hint: '请输入你的要求...',
  },
  underfine_conversation: {
    title: '未定义对话',
    desc: '很遗憾，MockData 功能在 V2.0.0 中被移除，所以所有 MockData 接口将无法正常显示。',
  },
  openai_setting: {
    apikey_empty_error: '抱歉Api Key不可以为空',
    baseurl_empty_error: '抱歉Base Url不可以为空',
    save_success: '保存成功!',
    save_failed: '保存失败!',
    baseurl_hint: '尽可能使用官方的\'https://api.openai.com/v1/\',避免出现一些意外情况。',
  },
  updateLog: {
    title: ' 版本更新日志',
  },
  save: '保存',
  cancel: '取消',
  clear: '清除',
  conversation: '对话列表',
  setting: '设置',
  chat_setting: 'Chat 设置',
  role: '角色',
  language: '语言',
  api_key: 'Api秘钥',
  chat_model: '聊天模型',
  edit_session_title: '编辑对话设置',
  session_theme_color: '对话主题颜色设置:',
  session_title: '对话标题:',
  session_desc: '对话详情:',
  session_clear_title: '你确定要清除你这个对话的聊天记录吗?',
  session_clear_desc: '你确定要清除你这个对话的聊天记录吗?',
  session_clear_warning: '（删除记录后无法恢复）',
  new: '新建对话',
  thinking: '思考中...',
  enter: '输入一些问题, (输入 \' / \' 来插入一个场景提示)',
  message_cannot_empty: '抱歉,消息内容不可以为空.',
  message_apikey_empty: '抱歉,ApiKey不可以为空.',
  message_session_title_empty: '抱歉，对话框标题不可以为空.',
  new_conversation_title: '新对话',
  new_data_worker_title: '新数据生成器',
  apikey_empty_error: '抱歉Api Key不可以为空',
  reload: '重新回答',
  edit: '编辑对话',
  delete: '删除',
  submit: '提交',
  export: '导出这个对话',
  conversation_clear: '删除对话内容',
  conversation_edit: '编辑对话信息',
  dialog_delete_confirm_title: '你确定要删除这条记录吗?',
  dialog_edit_title: '修改你的聊天内容',
  export_failed: '抱歉，导出消息失败。请稍后重新尝试。',
  enable_ipad_cursor_animation: '启用ipad鼠标动画',
  enable: '启用',
  disable: '禁用',
  reload_page_to_see_change: '重新加载页面以查看更改。',
  auto: '自动',
  developer: '开发者',
  doctor: '医生',
  teacher: '老师',
  student: '学生',
  leader: '领导',
  subordinate: '下属',
  chinese: '中文',
  english: '英文',
  delete_confirm_title: '你确定要删除这条记录吗?',
  fixed_top: '置顶',
  speak: '朗读',
  chinese_culture: '国粹',
  speech_setting: '语音设置 (TTS)',
  voice_actor: '嗓音设置',
  speech_processing: '当前有一个正在阅读的文本，请结束后再试。',
  speech_error: '抱歉，获取语音失败，请稍后重新尝试。',
  while_talking: '播放音频中...',
  restore_db_success: '还原数据库成功!',
  restore_db_failed: '还原数据库失败!',
  backup_db: '备份数据库',
  restore_db: '还原数据库',
  db_setting: '数据库备份',
  db_setting_desc: '数据库备份可以将当前的对话数据备份到本地，以便于在其他设备上使用。',
  ai_tools: 'AI 工具',
  load_data: '加载数据',
  generate_sql: '生成Sql数据表',
  data_tools_desc: '通过自定义列进行数据模拟',
  add_new_columns: '添加新的列',
  loading: '加载数据中...',
  tts_model: 'TTS 模型',
  draw_img_mode: '绘图模式',
  mock_data_mode: '模拟数据模式',
  fit_canvas: '自适应画布大小 (默认600x600)',
  generate_image: '生成图片',
  download_image: '下载图片',
  draw_img_hint: '请输入你的要求...',
  image_requirement_cannot_empty: '抱歉，图片要求不可以为空。',
  generate_image_ing: '正在生成图片...',
  generate_image_ing_hint: '请稍等片刻...',
  generate_image_error: '抱歉，生成图片失败。请稍后重新尝试。',
  previous_img: '上一张图片',
  next_img: '下一张图片',
  upload_img: '上传图片',
  vivid_mode: '生动模式',
  natural_mode: '自然模式',
  edit_img: '图片微调',
  edit_img_hint: '该功能正在开发中.',
  filter_type_all: '全部',
  filter_type_chat: '聊天',
  filter_type_data: '生成数据',
  filter_type_drawing: '生成图片',
  mark_function_calling_hint: '该消息来自互联网，请注意核实。',
  function_calling_setting: 'Function Calling 设置',
  view_function_calling_list: '查看 Function Calling 列表',
  checking_function_calling: '检查是否有可用的Function Calling...',
  waiting_for_function_calling_response: '等待Function Calling响应...',
  use_gpt_vision_api: '使用GPT Vision API (预览)',
  use_function_calling_tools: '使用Function Calling Tools',
  vision: '视觉识别',
  no_image_to_download: '没有图片可以下载!',
  data_worker_enter_modification: '输入修改条件（输入回车提交）',
  please_use_the_reload_data_button_on_the_bottom_right: '请使用右下角的加载数据按钮。',
  data_columns: '数据列',
  modification_suggestion: '修改建议',
  data_result: '数据结果',
  generate_sql_code: '生成SQL代码',
  download_csv_successful: '下载CSV成功!',
  download_csv_failed: '下载CSV失败!',
  please_wait_for_data_to_be_generated: '请等待数据生成...',
  please_generate_data_first: '请先生成数据!',
  please_add_at_least_one_column: '请至少添加一列!',
  daily_tips: '每日小贴士 ✨',
  always_close_daily_tips: '不在启动时显示小贴士',
  next_page: '下一个',
  previous_page: '上一个',
  download_json_successful: '下载JSON成功!',
  download_json_failed: '下载JSON失败!',
  prompts: '对话场景',
  manage_prompts: '管理对话场景',
  use_custom_prompt: '使用自定义对话场景',
  please_input_your_prompt: '请输入你的对话场景',
  please_input_prompt_title: '请输入对话场景标题',
  prompt_info_can_not_empty: '抱歉，对话场景信息不可以为空。',
  add_prompt_success: '添加对话场景成功!',
  add_prompt_failed: '添加对话场景失败!',
  confirm_delete_prompt: '你确定要删除这个对话场景吗?',
  edit_prompt_success: '编辑对话场景成功!',
  edit_prompt_failed: '编辑对话场景失败!',
  prompt_info_not_found: '对话场景信息未找到!',
  delete_prompt_success: '删除对话场景成功!',
  delete_prompt_failed: '删除对话场景失败!',
  please_input_test_message: '请输入测试消息',
  please_input_prompt_message: '请输入对话场景消息',
  test: '测试',
  test_this_prompt: '测试这个对话场景',
  test_result: '测试结果',
  loading_test_result: '正在加载测试结果...',
  the_feature_only_for_gpt4: '该功能仅适用于GPT-4模型',

}
