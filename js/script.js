$(document).ready(function(){


	//  menu toggle start
		$(document).on('click', '.menu-item', function(){
			var target = $(this).data('target');
			$('#'+target).removeClass('sub-menu');
			$('.sub-menu').slideUp();
			$('#'+target).addClass('sub-menu');
			$('#'+target).slideToggle();
		});	
	//  menu toggle end

	$('.sitebarBtn').click(function(){
		// $('.sitebar').css('width', "180px");
		if($('.sitebar').css('width') == '0px')
		{
			$('.sitebar').css('width', "180px");
		}
		else
		{
			$('.sitebar').css('width', "0px");
		}
	});
	// add bootstrap data table 
	$(function(){

		$('.dataTable').DataTable();
	// add bootstrap data table end  
	});


});