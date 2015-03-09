# Imperative

class Anagram
  def initialize(word)
    @the_word = word
  end

  def match(match)
    @results = []
    match.each do |wordmatch|
      if @the_word.downcase == wordmatch.downcase
      elsif @the_word.downcase.chars.sort == wordmatch.downcase.chars.sort
        @results << wordmatch
      end
    end
    @results
  end
end