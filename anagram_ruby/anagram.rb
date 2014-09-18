
class Anagram
  attr_accessor :word

  def initialize string
    self.word = string
  end

  def match dictionary
    dictionary.select { |entry| entry if entry.downcase.split(//).sort == self.word.downcase.split(//).sort && entry.downcase != self.word.downcase} 
  end
end