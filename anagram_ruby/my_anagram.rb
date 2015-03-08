## Imperative

def matcher(word, arr)
  @word = word.downcase
  @result_arr = []
  @input_arr = arr
  @chars = @word.chars.sort
  @input_arr.each do |in_word|
    @result_arr.push(in_word) if in_word.chars.sort == @chars
  end
  puts @result_arr
end


# Pseudo Testing -
puts "Test word is hello"
puts
puts "Imperative tests:"
puts
puts "Should return 2 results:"
matcher('hello', ['lleho', 'woot', 'helol'])
puts
puts "Should return no results:"
matcher('hello', ['npoe', 'woot', 'sadfasd'])
puts

# Object Oriented
class Word

  attr_accessor :word

  def initialize(word)
    @word = word.downcase
    self.word = word
  end

  def anagram(word)
    if self.same(word)
      return false
    else
      self.simplifier == word.simplifier
    end
  end

  def simplifier
    self.word.chars.sort
  end

  def same(word)
    self == word
  end
end

class Input < Word

  def initialize(word)
    @input = Word.new(word)
  end

  def solver(array)
    array.each do |result|
      puts result.word if result.anagram(self)
    end
  end

end



# Pseudo Testing - 
@test = Input.new('hello')
@test.word = 'hello'
@result1 = Word.new('helol')
@result2 = Word.new('woot')
@result3 = Word.new('elloh')
@result4 = Word.new('world')
@result5 = Word.new('alive')


puts
puts "Object Oriented tests:"
puts
puts "Should return two results:"
puts
@test.solver([@result1, @result2, @result3])
puts
puts "Should return no results:"
puts
@test.solver([@result2, @result4, @result5])













