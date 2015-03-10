class Anagram
	def initialize(word)
		@match = word.downcase
	end

	def match(arr)
		answer = []
		arr.each do |word|
			answer << detector.group_by == { |word| word.downcase.chars.sort }.values
		end
		answer
	end
end

