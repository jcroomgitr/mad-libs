$(document).ready(function() {

    $('#madlib-submit-btn').click(function() {
		
        let storyhtml = '    There once was a person named ' + $('#comedyName').val() + '. One day they decided to travel to ' + $('#comedyCountry').val() + 
        '.  They always wanted to try eating some ' + $('#comedyNoun1').val() + ' while ' + $('#comedyVerb1').val() + ' and wearing a ' + $('#comedyNoun2').val() +
        ', which is a long standing tradition there. When they got there, they immediately visited the ' + $('#comedyNoun3').val() + ' museum, which has the world\'s ' +
        'biggest collection of ' + $('#comedyNoun4').val() + '. Afterwards, they saw the ' + $('#comedyAdj1').val() + ' ' + $('#comedyNoun5').val() +
        ' on the way to their hotel. By the hotel, there was a ' + $('#comedyAdj2').val() + ' ' + $('#comedyNoun6').val() + ' convention going on. This made ' +
        $('#comedyName').val() + ' feel very ' + $('#comedyNoun7').val() + ', so they decided to book a room somewhere else. When they couldn\'t find any other ' + 
        'rooms,	they called their travel agent and demanded a refund. The agent ' + $('#comedyVerb2').val() + ' and booked them a flight home and their money back. ' +
        'Even though the trip was cut short, they still felt it was a very ' + $('#comedyAdj3').val() + ' trip and would remember it ' + $('#comedyAdverb').val() + '.';
          
         $('input').each(function() {
		
		//Check each input box for blanks
        if ($(this).val()==='')
		    {
		       alert('Finish filling out your mad lib words!');
			   return false;
		    }
			else if ($(this).is('.finalinput')) {
			   $('#comedyStory').html(storyhtml);
            }
		}); 
	});
});
	