/*************************/
/***** AUTHOR : EMP0699 
/***** DATE : 22-08-2014
/***** VERSION 2 : 11-02-2015
/*************************/
$(document).ready(function(){
	$cm_select_box='.custom-multi-select';
	$cm_select_option='select option';
	$cm_class_name_dot='.active';
	$cm_class_name='active';	
	$($cm_select_box).find('select').hide();		
	$($cm_select_box).each(function()
	{		
		$content_h='';	
		$(this).find($cm_select_option).each(function(){			
			($(this).is(':selected')?$selected=$cm_class_name:$selected="");
			$content_h+='<li class="' + $selected + '">' + $(this).text() + '</li>';			
		});
		$('<ul>' + $content_h + '</ul>').insertBefore($(this).find("select"));
	});
	
	$($cm_select_box).find('ul li').click(function(evt){
		$array = [];
		$obj=$(this);
		if($(this).parents('ul').find($cm_class_name_dot).length!=0)
		{	
			if (evt.ctrlKey==false && evt.shiftKey==false) 
			{
				$(this).parents($cm_select_box).find("li").removeClass($cm_class_name);
			}
		}
		$(this).toggleClass($cm_class_name);
		$(this).parents($cm_select_box).find($cm_class_name_dot).each(function(){
			$array.push($(this).index());
		});		
		$(this).parents($cm_select_box).find($cm_select_option).prop('selected',false);
		
		$.each($array,function(index, value){			
			$($obj).parents($cm_select_box).find($cm_select_option).eq(value).prop('selected',true);
		});
	});
});