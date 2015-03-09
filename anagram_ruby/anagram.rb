class Anagram

  def anagram_solver(words)
    empty_array = []
    empty_array.push(words)
    empty_array.flatten!
    empty_array.group_by { |word| word.downcase.chars.sort }.values 
    empty_array
  end

end
  
