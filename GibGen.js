// Gibberish Generator (JavaScript).
// Algorithm: Letter-based Markov text generator.
// Keith Enevoldsen, thinkzone.wlonk.com

function init(form)
{
generate_gibberish(form);
}

function generate_gibberish(form)
{
// Clear output.
form.outtext.value = ""

// Make the string contain two copies of the input text.
// This allows for wrapping to the beginning when the end is reached.
str = form.intext.value + " "
nchars = str.length
str = str + str

// Get level.
for (i = 0; i < form.level.length; i++) {
   if (form.level[i].checked) {
      lev = parseInt(form.level[i].value)
   }
}

// Check input length.
if (nchars < lev) {
   alert("Too few input characters.")
   return
}

// Pick a random starting character, preferably an uppercase letter.
for (i = 0; i < 1000; i++) {
   ichar = Math.floor(nchars * Math.random())
   chr = str.charAt(ichar)
   if ((chr >= "A") && (chr <= "Z")) break
}

// Write starting characters.
form.outtext.value = form.outtext.value + str.substring(ichar, ichar + lev)

// Set target string.
target = str.substring(ichar + 1, ichar + lev)

// Generate characters.
// Algorithm: Letter-based Markov text generator.
for (i = 0; i < 500; i++) {
   if (lev == 1) {
      // Pick a random character.
      chr = str.charAt(Math.floor(nchars * Math.random()))
   } else {
      // Find all sets of matching target characters.
      nmatches = 0
      j = -1
      while (true) {
         j = str.indexOf(target, j + 1)
         if ((j < 0) || (j >= nchars)) {
            break
         } else {
            nmatches++
         }
      }

      // Pick a match at random.
      imatch = Math.floor(nmatches * Math.random())

      // Find the character following the matching characters.
      nmatches = 0
      j = -1
      while (true) {
         j = str.indexOf(target, j + 1)
         if ((j < 0) || (j >= nchars)) {
            break
         } else if (imatch == nmatches) {
            chr = str.charAt(j + lev - 1)
            break
         } else {
            nmatches++
         }
      }
   }

   // Output the character.
   form.outtext.value = form.outtext.value + chr

   // Update the target.
   if (lev > 1) {
      target = target.substring(1, lev - 1) + chr
   }
}
}





function clear_all(form)
{
form.intext.value = ""
form.outtext.value = ""
}

function addSalutation(form)
{
   form.outtext.value = "";
}