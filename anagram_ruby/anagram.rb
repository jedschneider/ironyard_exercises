class Anagram 
  def initialize(input)
    @word = input
  end
  def match(input2)
    mikesArray=[]
    input2.each do |dog| 
      if @word.downcase == dog.downcase
      elsif @word.downcase.chars.sort == dog.downcase.chars.sort
        mikesArray.push(dog)
      end
    end
    mikesArray
  end
end