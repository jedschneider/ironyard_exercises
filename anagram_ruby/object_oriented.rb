# Object Oriented
class Word
  attr_accessor :word
  def initialize(word)
    self.word = word
  end

  def check(word)
    return false if self.same_as(word)
    prepare(self.word) == prepare(word)
  end

  def prepare(word)
    word.downcase.chars.sort
  end

  def same_as(word)
    self.word.downcase == word.downcase
  end
end

class Anagram < Word
  def initialize(word)
    self.word = word
  end

  def match(arr)
    return_arr = []
    arr.each do |word|
      return_arr.push(word) if self.check(word)
    end
    return return_arr
  end
end