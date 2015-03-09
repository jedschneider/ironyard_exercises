## Imperative
class Anagram
  def initialize(word)
    @word = word
  end

  def match(arr)
    @anagram = @word.downcase
    @result_arr = []
    @chars = @anagram.chars.sort
    arr.each do |in_word|
      if in_word.downcase.chars.sort == @chars && in_word.downcase != @anagram.downcase
        @result_arr.push(in_word)
      end
    end
    return @result_arr
  end
end