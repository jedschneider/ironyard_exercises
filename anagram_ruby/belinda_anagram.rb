class Anagram
  def initialize (gram)
    @word = gram
  end
  def match (match_words)
    word_array=[]
    match_words.each do |match_word|
      if @word.downcase == match_word.downcase
      #checking to see if word 1 matches word 2
      elsif @word.downcase.chars.sort == match_word.downcase.chars.sort
      word_array.push(match_word)
      #breaking the word into characters and adding word 2 to the blank array if it matches the characters in word 1
      end
    end
    word_array
    #display array with word 2 matches 
  end
end

