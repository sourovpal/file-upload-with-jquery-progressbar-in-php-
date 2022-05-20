<!DOCTYPE html>
<html>
<head>
	<title></title>
	<!-- <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"> -->
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery.form.js"></script>
 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style type="text/css">
		*{
			box-sizing:border-box;
			margin:0;
			padding:0;
			border:0;
			color:#000;
			outline:none;
		}
		body
		{
			background:rgba(0,0,0,0.66);
			width:100%;
			display:flex;
			justify-content:center;
			align-items:center;
		}
		.main{
			width: 550px;
    		height: 210px;
    		background: #fff;
    		border-radius: 5px;
    		-webkit-box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.15);
    		-moz-box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.15);
    		-ms-box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.15);
    		-o-box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.15);
    		box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.15);
		}
		.header{
			width:100%;
			height:50px;
			/*background:#0082ce;*/      /*blow*/
			background:#FF5722; /*orange*/
			border-top-left-radius:5px;
			border-top-right-radius:5px;
			padding:0 15px;
		}
		.header-body
		{
			display:flex;
			justify-content:space-between;
		}
		.header-body .header-title
		{
			font-size:20px;
			color:#fff;
			line-height:50px;
			font-weight:bold;
			font-family:sans-serif;
		}
		.header-body .close-btn
		{
			background:none;
			outline:none;
			border:0;
		}
		.header-body .close-btn span
		{
			font-size: 35px;
			/*font-size:20px;*/
    		/* font-weight: bold; */
    		color: #ffffff;
    		/*color: #676767;*/
    		padding: 2px 7px;
    		/* background: white; */
    		border-radius: 50%;
    		cursor: pointer;
    		transition: 0.5s;
		}
		.header-body .close-btn span:hover{color:#737373;}
		.body{position:relative;}
		.body input[type="file"]{display:none;}
		.body .input-file{
			position: absolute;
    		top:40px;
    		left: 50%;
    		transform: translateX(-50%);
    		width: 95%;
    		height: 40px;
    		background: #fff;
    		-webkit-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.19);
    		-moz-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.19);
    		-ms-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.19);
    		-o-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.19);
    		box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.19);
    		display: flex;
    		justify-content: center;
    		align-items: center;
    		border-radius: 4px;
    		cursor:pointer;
    		padding:0 10px;
		}
		.body .input-file span
		{
			color: #ff5722;
    		font-size: 15px;
    		font-weight: 600;
    		font-family: sans-serif;
    		letter-spacing: 0.8px;
		}
		.footer{
			position:relative;
			top:111px;
			width:100%;
			height:50px;
			/*background:#0082ce;*/
			border-bottom-left-radius:5px;
			border-bottom-right-radius:5px;
			padding:0 15px;
		}
		.footer-body
		{
			display:flex;
			justify-content:flex-end;
		}
		.footer-body .cancel-btn,
		.footer-body .update-btn
		{
			padding: 10px 10px;
    		margin-left: 10px;
    		font-size: 15px;
    		font-weight: 600;
    		border-radius: 3px;
    		box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.23);
    		-webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.23);
    		-moz-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.23);
    		-ms-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.23);
    		-o-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.23);
    		cursor: pointer;
    		font-family:sans-serif;
		}
		.footer-body .cancel-btn
		{
			background:#fff;
			color:#676767;
		}
		.footer-body .update-btn
		{
			/*background:#0293e8;*/ /*blow*/
			background:#ff5722; /*orange*/
			color:#fff;
			/*box-shadow:none;*/
			transition:0.5s;
		}
		/*.footer-body .update-btn:hover{background:#0082ce;}*/
		.progress{
			width:100%;
			height:15px;
			border-radius:5px;
			background:#efefef;
			overflow:hidden;
		}
		.progress-bar{
			width:0%;
			height:15px;
			background:#ff5722;
		}
	</style>
</head>
<body>
<br><br>
	<div class="main">
		<div class="header">
			<div class="header-body">
				<div class="header-title">Uplode File</div>
				<button class="close-btn"><span>&times;</span></button>
			</div>
		</div>
		<form method="post" action="upload.php" id="uploadForm">
		<div class="body">
			<label class="input-file">
				<div class="progress" style="display:none;">
					<div class="progress-bar"></div>
				</div>
				<span id="fileTitle">SELECT FILE</span>
				<input multiple="" id="uploadFile" type="file" name="uploadFile">
			</label>
		</div>
		<div class="footer">
			<div class="footer-body">
				<button type="button" class="cancel-btn">CANCEL</button>
				<button type="submit" class="update-btn">UPDATE</button>
			</div>
		</div>
		</form>
	</div>


</body>
</html>


<script type="text/javascript">
	

$(document).ready(function(){
	$("#uploadFile").change(function(){
		$('#fileTitle').hide();
		$('.progress').show();
	});
$("#uploadForm").submit(function(event){
		if($("#uploadFile").val())
		{
			event.preventDefault();
			$("#targetLayer").hide();
			$(this).ajaxSubmit({

				target: '',
				beforeSubmit:function()
				{
					$('.progress-bar').width('0%');
				},
				uploadProgress:function(event, position, totla, complete)
				{
					$('.progress-bar').animate({
						width:complete+'%'
					},{
						duration:5
					});
				},
				success:function()
				{
					$('.progress').hide();
					$('#fileTitle').show();
					$('#fileTitle').html('FILE UPLOAD SUCCESSFULL !');
				},
				resetForm:true

			});
		}
		return false;
	});
});





</script>