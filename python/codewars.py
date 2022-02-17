# https://www.codewars.com/kata/53222010db0eea35ad000001/train/python

# def getSlope(p1,p2):
#   if (p2[0]==p1[0]):
#     return None
#   else:
#     return ((p2[1]-p1[1])/(p2[0]-p1[0]))




# https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/python


# x = [int(a) for a in str(testing)]
# print(x)

def narcissistic( value ):
  
  val = [int(a) for a in str(value)]
  length = len(val)
  print(val)
  new_value = map(lambda x:(x**length),val)
  new_value=tuple(new_value)
  sum=0
  for x in new_value:
    sum+=x
  if(sum==value):
    return True
  else: return False
  


narcissistic(153)


# numbers = (1,2,3,4)
# result=map(lambda x: x*x,numbers)
# print(result)