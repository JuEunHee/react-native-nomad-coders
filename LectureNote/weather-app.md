### 설치 및 실행

```bash
# 이걸로 새로운 앱 설치. 빈 템플릿으로 선택했음.
expo init NomadWeather
expo login
pnpm start
```

[https://snack.expo.dev/에서 브라우저에서 코드 편집 가능](https://snack.expo.dev/)


### 코드 구성 요소
- View : Container
- Text : 모든 텍스트는 <Text></Text>안에 들어가야한다.
- Stylesheet에서 웹과 완전히 동일하게 속성을 쓰지않음. (border: 1px green dashed 같은건 안됨)
  * 인라인으로 스타일 코드를 작성할 수 있지만, Stylesheet.create가 자동완성을 제공하므로 그걸 사용하는 것을 권장.
  * 코드와 스타일은 분리해서 만드는 것을 권장.
  * StatusBar는 third party library (express bar). 시계, 배터리.. 등의 바