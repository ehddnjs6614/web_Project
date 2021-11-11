let target = document.querySelector('#dynamic')

function randomString() {
  let stringArr = [
    '안녕, 혜민아',
    '오늘도 고생했어, 내사랑',
    '항상 좋은일만 가득하길 기도할게',
    '언눙 보고싶다, 내사랑 ❤',
  ]
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
  let selectStringArr = selectString.split('')

  return selectStringArr
}

//타이핑리셋
function resetTyping() {
  target.textContent = ''
  dynamic(randomString())
}

//한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift()
    setTimeout(function () {
      dynamic(randomArr)
    }, 80)
  } else {
    setTimeout(resetTyping, 3000)
  }
}
dynamic(randomString())

//커서 깜빡임 효과
function blink() {
  target.classList.toggle('active')
}
setInterval(blink, 500)
