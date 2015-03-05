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


# Object-Oriented
#
class Anagram

  attr_accessor :target

  def initialize(target)
    self.target = AnagramTerm.new(target)
  end

  def match(possibles)
    # I wasn't aware of the select method - very concise!
    possibles.select { |possible| self.target == AnagramTerm.new(possible) }
  end
end

class AnagramTerm

  attr_accessor :orig
  attr_accessor :sorted

  # grab the original and sorted (both downcased) terms
  def initialize(term)
    self.orig = term.downcase
    self.sorted = self.orig.chars.sort.join
  end

  # A term is an anagram of another term if the sum of chars is equal
  # to the other term (easy check if we except many failures) and the
  # sorted term is equal to the sorted other_term
  def ==(other)
    if other.is_a?(AnagramTerm)
      return ( self.sorted == other.sorted ) && ( self.orig != other.orig )
    end
    Raise("No equals? method defined for type: #{other.class}")
  end
end
