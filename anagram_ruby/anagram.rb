# Imperative
#
class Anagram

  def initialize(word)
    @my_word = word
  end

  def match(arr)
    @anagram = @my_word.downcase
    results = []
    @chars = @my_word.chars.sort
    arr.each do |the_word|
      results << the_word if the_word.chars.sort == @chars && the_word != @my_word
    end

    return results
  end
end

#not sure where to go
class Anagram
  def initialize(word)
    @my_word = Anagram.new(word)
  end

  def match(arr)
    arr.select {|word| @my_word.anagram_of?(word) }
  end

end
