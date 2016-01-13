# SortData.py
# Michael Sawyer
# 7/30/2015

import csv
import sys
import operator

def main():
  #  Usage Message
  if len(sys.argv)==2 and sys.argv[1] == "--help":
    print "Usage: python sort_data.py [high|low]"
    exit(0)
  elif len(sys.argv) > 2:
    print "Usage: python sort_data.py [high|low]"
    exit(1)

  #  Opens file 'data.csv'
  f           = open('data.csv')
  reader      = csv.reader(f)
  header      = next(reader, None)

  #  Call sorting method based on arg.
  #  Default is from high to low ["high"]
  if (len(sys.argv) == 1 or sys.argv[1] == "high"):
    list = sort(reader, "high")
  elif sys.argv[1] == "low":
    list = sort(reader, "low")
  else:
    print "Usage: python sort_data.py [high|low]"
    exit(2)
  print_csv(header, list)


#  Sorts data by price
def sort (reader, direction):
  if direction == "high":
    sorted_list = sorted(reader, key=lambda x: float(operator.itemgetter(3)(x)),
                         reverse=True)
  else:
    sorted_list = sorted(reader, key=lambda x: float(operator.itemgetter(3)(x)))
  return sorted_list

#  Prints results to standard out
def print_csv(header, list):
  print ','.join(str(p) for p in header)
  for row in list:
    print ','.join(row)

#  Run SortData
if __name__ == "__main__":
  main()
