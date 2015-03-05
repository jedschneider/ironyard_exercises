# Imperative
#
class Anagram

  attr_accessor :target

  # I'm borrowing your initialize function because it seems
  # punctilious to me seeing that we want to be case-insensitive
  def initialize(target)
    self.target = target.downcase
  end

  # Return an array of matching anagrams. If no match can be fround,
  # return an emtpy array.
  def match(possibles)
    # it is necesary but not sufficient that a term is an anagram
    # if-and-only-if the sum of the character codes are equal to the
    # sum of the character codes of the target... therefor, remove any
    # item from the list of possibles if the sum of the character
    # codes do not match the sum of the character codes of the target,
    # because if this is the case, we know it is not a match (we do
    # this first because I assume it is less work than sorting and
    # checking for equality, so lets minimize the number of times we
    # do the expensive stuff!)
    target_sum = self.target.sum
    possibles.delete_if { |possible| possible.downcase.sum != target_sum }
    # now that we have removed everything we know is not an anagram,
    # we must check the remaining to see if they really are an
    # anagram... it is sufficient to check for string equality when
    # both terms are sorted
    sorted_target = target.chars.sort.join
    possibles.delete_if { |possible|
      ( possible.downcase.chars.sort.join != sorted_target ) ||
        ( possible.downcase == target ) }
    # return what is left of our possibles
    return possibles
  end
end
