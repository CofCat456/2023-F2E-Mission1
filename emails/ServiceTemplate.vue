<script lang="ts" setup>
defineProps<{
  name: string
  phone: string
}>()

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
}

const logo = {
  margin: '0 auto',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}
</script>

<template>
  <EHtml>
    <EHead />
    <EPreview> 感謝您寶貴的意見！我們已收到並將盡快回覆您。 </EPreview>
    <EBody :style="main">
      <EContainer :style="container">
        <EImg src="../public/logo.svg" width="55" height="50" alt="Miao Li-Han" :style="logo" />
        <EText :style="paragraph">
          親愛的 {{ name }}，
        </EText>
        <EText :style="paragraph">
          感謝您在我們的網站上留下寶貴的意見。我們非常感激您抽出寶貴的時間與我們分享您的想法和建議。
        </EText>
        <EText :style="paragraph">
          您的意見對我們來說非常重要，因為它們有助於我們不斷改進我們的服務，以確保我們能夠為您和其他用戶提供最好的體驗。
        </EText>
        <EText :style="paragraph">
          如果您對我們的服務有任何進一步的疑問或建議，請隨時與我們聯繫。我們非常樂意聆聽您的反饋。
        </EText>
        <EText :style="paragraph">
          再次感謝您的寶貴意見，期待能夠再次與您互動。
        </EText>
        <EText :style="paragraph">
          祝您一切順利！
        </EText>
        <EText :style="paragraph">
          最好的祝福，
          <br>
          喵立翰立委參選人
        </EText>
      </EContainer>
    </EBody>
  </EHtml>
</template>
