# Write a program that, given a word and a list of possible anagrams, selects the correct sublist.

# Given "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".

#Imperative:

class Anagram

    def downcase_word(word)
      @original_word = word.downcase
    end
    
    def test(array)
      anagram_array = []
      x = 0
      while x < array.length do
        current_word = array[x]
        if current_word.length == @original_word.length
          if current_word.chars.sort == @original_word.chars.sort
            anagram_array << current_word
          end
        end
        x +=1
      end
      anagram_array 
    end


end














# word = 'listen'
# array_word = []
# array_word.push(word.split(''))
# array_current_word = []
# candidates = ['enslists', 'google', 'inlets', 'banana', 'listen']
# anagrams = []

# x = 0
# y = 0
# while x < candidates.length do

# #puts candidates[x]
# current_word = candidates[x].downcase
# if current_word != word
# # puts candidates[x]
#   if current_word.length == word.length
#     if current_word.chars.sort == word.chars.sort
#       anagrams.push(current_word)
#     end
#   end
# end
# x +=1
# end
# p anagrams



# anagrams_2 = []
# #declarative
# candidates.each do |candidate|
#   if candidate != word
#     if candidate.chars.sort == word.chars.sort
#       anagrams_2.push(candidate)
#     end
#   end
# end
# p anagrams_2




# # make both words into array.
# # check if all letters are in array of other
# # if yes good. no not!


# #try .include? 














