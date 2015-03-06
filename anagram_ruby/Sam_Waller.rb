class Anagram

  def initialize(input)
    @match = input.downcase
  end

  def match(arr)
    result = []
    arr.each do |input|
      downcased = input.downcase
      matcher = @match.chars.sort
      unless @match == downcased
        result << input if matcher == downcased.chars.sort
      end
    end
    result
  end
end