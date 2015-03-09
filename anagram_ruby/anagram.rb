# Imperative
#
class Anagram

  def initialize(word)
    @my_word = word.downcase
  end

  def match(arr)
    results = []
    @chars = @my_word.chars.sort
    arr.each do |the_word|
      something = the_word.downcase
      results << the_word if something.chars.sort == @chars && something != @my_word
    end

    return results
  end
end

# not sure where to go
# class Anagram
#   def initialize(word)
#     @my_word = Anagram.new(word)
#   end

#   def match(arr)
#     arr.select {|word| @my_word.anagram_of?(word) }
#   end

