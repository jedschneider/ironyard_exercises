class Anagram
	def initialize(word)
		@a_word = word
	end	

	def match(kiwi)
		@matches = []
		kiwi.each do |mango|
			if @a_word.downcase == mango.downcase
			elsif @a_word.downcase.chars.sort == mango.downcase.chars.sort
				@matches.push(mango)
			end
		end
		@matches		
	end
end	