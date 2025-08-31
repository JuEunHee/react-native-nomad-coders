
![How does React Native Work](image.png)

- React Native가 bridge를 통해 ios, android로 번역해줌.


![javascript-to-native](javascript-to-native.png)

- 우리가 어떤 event를 기다리고 있다고 해보자 . 버튼 클릭을 예로 들면, 이벤트는 native에서 기록됨. ios와 안드로이드는 터치 event를 감지한다. 어디에서 event가 발생했는지 등을 가지고 보냄. bridge가 감지하여 json으로 보냄. javascript가 실행.

ios와 안드로이드는 bridge를 통해 json으로 javascript 보냄. 

1. 사용자가 버튼 클릭
2. event는 native에서 감지
3. 데이터 감지됨. bridge에서 메시지로 만들어짐. 
4. javascript에서 버튼을 붉은 색으로 바꿈
5. react native 운영체제에게 메시지 전달. '버튼을 붉은 색으로 바꿔주세요.'

요약하면, 메시지를 주고 받는것. 
javascript는 단순히 개발자들이 메시지를 주고받는 메시지일뿐.

그렇기때문에 시뮬레이터가 필요(java, xcode..)

그래서 React Native로 만들때는 이 모든 것들을 다 만드는거야. 