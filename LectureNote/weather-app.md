### 설치 및 실행

```bash
# 이걸로 새로운 앱 설치. 빈 템플릿으로 선택했음.
expo init NomadWeather
expo login
pnpm start

expo install expo-location
```

[https://snack.expo.dev/에서 브라우저에서 코드 편집 가능](https://snack.expo.dev/)

### Expo 사용법
- 터미널에 m을 입력하거나 휴대폰을 흔들어 메뉴를 열고 Show Element Inspector를 클릭하여 컴포넌트의 크기를 확인할 수 있음. 

### 코드 구성 요소
- View : Container
- Text : 모든 텍스트는 <Text></Text>안에 들어가야한다.
- Stylesheet에서 웹과 완전히 동일하게 속성을 쓰지않음. (border: 1px green dashed 같은건 안됨)
  * 인라인으로 스타일 코드를 작성할 수 있지만, Stylesheet.create가 자동완성을 제공하므로 그걸 사용하는 것을 권장.
  * 코드와 스타일은 분리해서 만드는 것을 권장.
  * StatusBar는 third party library (express bar). 시계, 배터리.. 등의 바

### API
- [예제: Vibration. expo앱 코드도 공식 홈페이지에서 제공해줌.](https://reactnative.dev/docs/vibration)
- AsyncStore와 같은 기능이 필요하면 직접 만들어서 여기에 올릴 수 있음. (third party packages)
  * : https://reactnative.directory/?search=storage
- 위와 같은 개인 프로젝트는 업데이트가 활발하지 않을 수 있어 Expo에서 제공하는 Expo SDK를 쓰는 것도 좋다.
  * : https://docs.expo.dev/versions/latest/sdk/document-picker/
  * Expo와 RN에서 제공하는 API는 다를 수도 있음.
    - Expo StatusBar Style : StatusBarStyle('auto' | 'inverted' | 'light' | 'dark')
    - RN : StatusBarStyle('default' | 'light-content' | 'dark-content')

- 유용한 API 목록
  * [Dimensions](https://reactnative.dev/docs/next/dimensions)
  : 휴대폰 화면 크기를 알려줌
  * [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
    - `const { granted } = await Location.requestForegroundPermissionsAsync();`
    - `const getCurrentLocation = await Location.getCurrentPositionAsync({ accuracy: 5 });`
  * [One Call API 3.0](https://openweathermap.org/api/one-call-3)
    - open weather에서 제공하는 7일간의 일기예보를 제공해주는 api
    
  

### 레이아웃

- 그리드, 등등 못씀. <View />은 기본적으로 이미 FlexBox이고, 기본값은 column이다.
- 비율로만 정할 수 있음. 디바이스 사이즈에 따라 다르게 보일 수 있으므로 보통 width, height보다는 flex 사용
- 부모에도 flex: 1을 주는게 중요함. 부모를 지우면 자식이 뭐의 5배인지 모르니까 아무것도 보이지 않는다.

- <ScrollView> : https://reactnative.dev/docs/next/scrollview
  * [props - horizontal](https://reactnative.dev/docs/next/scrollview#horizontal)
  * [contentContainerStyle](https://reactnative.dev/docs/next/scrollview#horizontal)
    - ScrollView에 스타일을 줄 때는 contentContainerStyle={styles.myStyle}와 같이 써야함. 또한 flex는 주지 않도록 함. 부모보다 더 넓은 부분을 스크롤해야하므로.
  * [pagingEnabled](https://reactnative.dev/docs/next/scrollview#pagingenabled)
    - 스크롤을 자유롭게 하지 못하게 함. 페이지가 생기도록 해줌.
  * showsHorizontalScrollIndicator={false} : 페이징 시 스크롤 안보이게 하기

## 연관 사이트
- 리액트 네이티브 공식 사이트 : https://reactnative.dev/
  * [Core Components and APIs](https://reactnative.dev/docs/components-and-apis) -> 원래는 ios와 안드로이드의 컴포넌트 및 api를 최대한 지원해주려고했지만 이제는 필수 컴포넌트만 남기고 지원 범위를 줄임. community packages를 이용할 것을 권장.
