#Imperative - With an imperative approach, a developer writes code that describes in exacting detail the steps that the computer must take to accomplish the goal.

#Functional - a functional approach involves composing the problem as a set of functions to be executed.

class Anagram

  attr_accessor :original_word

    def initialize(word)
      self.original_word = word.downcase
    end
    
    def match(array)
      anagram_array = []
        x = 0
      while x < array.length do
        current_word = array[x]
        test_word = current_word.downcase
          if test_word != original_word
            if test_word.length == original_word.length
              if test_word.chars.sort == original_word.chars.sort
                anagram_array << current_word
              end
            end
          end
        x +=1
      end
      anagram_array 
    end
end

#

