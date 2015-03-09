# Imperative
#
class Anagram


  def initialize(iguana)
    @match = iguana
  end

  def match(cat)
    @cats = []
    cat.each do |c|
      if @match.downcase == c.downcase
      elsif @match.downcase.chars.sort == c.downcase.chars.sort
        @cats.push(c)
      end
    end
    @cats
  end
end