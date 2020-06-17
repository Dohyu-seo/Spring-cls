$(function(){

	$('#idck').click(function(){
		// 할일
		// 1. 입력태그에 입력된 아이디를 가져오고
		var sid = $('#id').val();
		alert(sid);
		if(sid){
			$.ajax({
				url: '/cls/member/idCk.cls',
				type: 'post',
				dataType: 'json',
				data: {
					'id': sid
				},
				success: function(data){
					var result = data["cnt"];
					if(result == 0){
						// 아이디를 사용가능한 경우
						$('#idmsg').text('*** 사용 가능한 아이디 입니다. ***');
						$('#idmsg').css('color', 'blue');
						$('#idmsg').css('display', '');
						
					} else {
						// 아이디가 사용불가능한 경우
						$('#idmsg').text('### 사용할 수 없는 아이디 입니다. ###');
						$('#idmsg').css('color', 'red');
						$('#idmsg').css('display', '');
						$('#id').val('');
						$('#id').focus();
					}
				},
				error: function(){
					alert('### 통신 실패 ###');
				}
			});
		} else {
			$('#id').focus();
			return;
		}
	});
	
	$('#jbtn').click(function(){
		// 데이터 무결성 검사하고
		
		$('#frm').submit();
	});
	
	$('#wgen').click(function() {
			$('#avtbox').removeClass('dnone');
			$('#favt').removeClass('dnone');
			$('#mavt').addClass('dnone');
	});
	$('#mgen').click(function() {
			$('#avtbox').removeClass('dnone');
			$('#favt').addClass('dnone');
			$('#mavt').removeClass('dnone');
	});
	
	$('#repw').keyup(function(){
		// 먼저 데이터 읽고
		var spw = $('#pw').val();
		if(!spw){
			$('#pw').focus();
		}
		var srepw = $('#repw').val();
		// 데이터 비교하고
		if(spw != srepw){
			$('#pwck').html('# 비밀번호가 다릅니다. #');
			$('#pwck').css('color', 'red');
			$('#pwck').removeClass('dnone');
		}
		if(spw == srepw){
			/*
			$('#pwck').html('* 비밀번호가 동일합니다. *');
			$('#pwck').css('color', 'blue');
			$('#pwck').css('display', '');
			*/
			$('#rePwBox').css('display', 'none');
		}
		
	});
	
});
/*
document.getElementById('wgen').onclick = function() {
	if (wgen.checked) {
		document.getElementById('avtbox').classList.remove('dnone');
		document.getElementById('favt').classList.remove('dnone');
		document.getElementById('mavt').classList.add('dnone');
	}
}
document.getElementById('mgen').onclick = function() {
	if (mgen.checked) {
		document.getElementById('avtbox').classList.remove('dnone');
		document.getElementById('favt').classList.add('dnone');
		document.getElementById('mavt').classList.remove('dnone');
	}
}

document.getElementById('file').onchange = function(e){
	var pic = URL.createObjectURL(e.target.files[0]);
	var el = document.getElementById('img1');
	el.setAttribute('src', pic);
	el.classList.add('pd15');
	el.classList.add('w3-border');
	var clslist = el.classList.remove('dnone');
}
*/