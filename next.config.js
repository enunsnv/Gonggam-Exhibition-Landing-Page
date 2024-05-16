// next.config.js

module.exports = {
  // 기존 설정과 필요에 따라 다른 설정 추가 가능
  // output: export 설정 추가
  output: {
    // 다음과 같이 export 설정 추가
    // 여기서 'export'는 output에 대한 타입입니다. 다른 유형도 사용 가능합니다.
    // 'export' 타입은 정적 HTML을 생성하여 응답합니다.
    // 이는 'server' 또는 'compiled-serverless'와 달리 정적인 응답을 생성합니다.
    // 정적 응답을 생성할 때는 API 라우트가 호출되지 않으므로 주의해야 합니다.
    // 자세한 내용은 https://nextjs.org/docs/messages/export-has-been-replaced 문서를 참조하세요.
    export: {},
  },
};
