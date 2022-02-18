# https://www.codewars.com/kata/53222010db0eea35ad000001/train/python

# def getSlope(p1,p2):
#   if (p2[0]==p1[0]):
#     return None
#   else:
#     return ((p2[1]-p1[1])/(p2[0]-p1[0]))




# https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python


# x = [int(a) for a in str(testing)]
# print(x)

# def narcissistic( value ):
  
#   val = [int(a) for a in str(value)]
#   length = len(val)
#   print(val)
#   new_value = map(lambda x:(x**length),val)
#   new_value=tuple(new_value)
#   sum=0
#   for x in new_value:
#     sum+=x
#   if(sum==value):
#     return True
#   else: return False
  


# narcissistic(153)


#https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/python

def find_outliers(integers):
  counter = 0
  evens = 0
  while(counter<=2):
    if(integers[counter]%2==0):
      evens+=1
    counter+=1
  
  if(evens>1):
    for x in integers:
      if(x%2!=0):
        return x
  else: 
    for x in integers:
      if(x%2==0):
        return x

print(find_outliers([1,1,4]))