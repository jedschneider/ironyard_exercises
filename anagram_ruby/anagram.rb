# Imperative
#

# class String
#   def anagram_of? other_word
#     other_word = other_word.downcase
#     lower_self = downcase
#     lower_self != other_word && lower_self.chars.sort == other_word.chars.sort
#   end
# end
#
# class Anagram
#
#   def initialize(word)
#     @match = word.downcase
#   end
#
#   def match(arr)
#     arr.select do |word|
#       word.anagram_of?(@match)
#     end
#   end
# end

# OO version
# class Anagram
#
#   def initialize(word)
#     @word = AnagramSubject.new(word)
#   end
#
#   def match(arr)
#     arr.select {|word| @word.anagram_of?(word) }
#   end
# end
#
# class AnagramSubject
#   attr_reader :word
#
#   def initialize(word)
#     @word = word.downcase
#   end
#
#   def anagram_of?(word)
#     subject = AnagramSubject.new(word)
#     !duplicate_of?(subject) && (fingerprint == subject.fingerprint)
#   end
#
#   def fingerprint
#     @fingerprint ||= canonicalize(@word)
#   end
#
#   private
#
#   def duplicate_of?(subject)
#     @word == subject.word
#   end
#
#   def canonicalize(word)
#     word.chars.sort
#   end
#
# end

# functional
#
class Anagram
  def initialize(word)
    @word = word
  end

  def match(arr)
    arr.inject({}, &hash_of_match_data)
       .reject(&duplicates)
       .select(&fingerprints)
       .keys
  end

  def fingerprint(word)
    word.downcase.chars.sort
  end

  def hash_of_match_data
    matcher = fingerprint(@word)

    ->(result_hash, potential_anagram) {
      obj = {
        fingerprint: fingerprint(potential_anagram),
        matcher: matcher
      }
      result_hash[potential_anagram] = obj
      result_hash
    }
  end

  def duplicates
    downcased = @word.downcase
    ->(potential_anagram, _value) { downcased == potential_anagram.downcase }
  end

  def fingerprints
    ->(_potential_anagram, match_data) { match_data[:matcher] == match_data[:fingerprint] }
  end

end
