class Anagram
  def initialize (gram)
    @word = gram
  end
  def match (match_word)
    word_array=[]
    match_word.each do |popcorn|
      if @word.downcase == popcorn.downcase
      #checking to see if word 1 matches word 2
      elsif @word.downcase.chars.sort == popcorn.downcase.chars.sort
      word_array.push(popcorn)
      #breaking the word into character and adding word 2 to the blank array if it matches the characters in word 1
      end
    end
    word_array
    #display array with word 2 matches 
  end
end

