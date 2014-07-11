jQuery(document).ready(function($) {
	$('.widget_is_duplicated').closest('.widget').find('h4').prepend('<span title="' + duplicate_widget.widget_is_duplicated + '">' + duplicate_widget.notation +'</span> ');
});