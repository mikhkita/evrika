<?php
	require_once("phpmail.php");

	// $email_admin = "beatbox787@gmail.com";
	$email_admin = "franchise@evrikagames.ru";

	$from = "“Эврика”";
	$email_from = "robot@evrika.ru";

	$deafult = array("name"=>"Имя","phone"=>"Телефон", "email"=>"E-mail");

	$fields = array();

	if( count($_POST) ){

		foreach ($deafult  as $key => $value){
			if( isset($_POST[$key]) ){
				$fields[$value] = $_POST[$key];
			}
		}

		$i = 1;
		while( isset($_POST[''.$i]) ){
			$fields[$_POST[$i."-name"]] = $_POST[''.$i];
			$i++;
		}

		$subject = $_POST["subject"];

		$title = "Поступила заявка с сайта ".$from.":\n";

		$message = "<div><h3 style=\"color: #333;\">".$title."</h3>";

		foreach ($fields  as $key => $value){
			$message .= "<div><p><b>".$key.": </b>".$value."</p></div>";
		}
			
		$message .= "</div>";
		
		if(send_mime_mail("Сайт ".$from,$email_from,$name,$email_admin,'UTF-8','UTF-8',$subject,$message,true)){
			if($subject == "Выслать презентацию") {
				$user_subject = "Эврика - квесты в реальности";
				$user_message = "<div><p>Добрый день!<br>Благодарим за проявленный интерес к франшизе квестов Эврика.<br>Высылаем Вам презентацию.<br>Готовы ответить на интересующие вопросы.<br><br>Эврика - квесты в реальности<br>8-964-589-99-77<br><a href='mailto:franchise@evrikagames.ru'>franchise@evrikagames.ru</a></p></div>";
				$files = array();
				array_push($files, dirname(__FILE__)."/Evrika.pdf");
				XMail("Сайт ".$from,$email_from,$name,$_POST['email'],'UTF-8','UTF-8',$user_subject,$user_message,$files,true);
			}
			echo "1";
		}else{
			echo "0";
		}
	}
?>