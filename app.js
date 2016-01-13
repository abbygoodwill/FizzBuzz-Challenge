$(document).ready(function() {
	for (var i = 1; i <= 100; i++) {
		if ((i % 3 == 0) && (i % 5 == 0)) {
			$('#fizzbuzzPrint').append('<li class="toadd">' + "FizzBuzz" + '</li>');
		} else if (i % 3 == 0) {
					$('#fizzbuzzPrint').append('<li class="toadd">' + "Fizz" + '</li>');
		} else if (i % 5 == 0) {
			$('#fizzbuzzPrint').append('<li class="toadd">' + "Buzz" + '</li>');
		} else {
			$('#fizzbuzzPrint').append('<li class="toadd">' + i + '</li>');		}
	}
});