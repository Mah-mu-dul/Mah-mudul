def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

days_in_month = {1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}
days_in_month_leap = {1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}



days = {"Sun":1,"Mon":2,"Tue":3,"Wed":4,"Thu":5,"Fri":6,"Sat":7}


def makeCalender(date):
    date,day = date.split(" ")
    print("|---------------------------|")
    print("|Sun|Mon|Tue|Wed|Thu|Fri|Sat|")
    print("|---------------------------|")
    d,m,y = list(map(int, date.split("/")))

    starting_from = 7-(d-days[day])%7 
    if starting_from == 7:
        starting_from = 0
    
    rest = 0
    if is_leap_year(y):   
        rest = days_in_month_leap[m]-(28+7-starting_from)
    else:
        rest = days_in_month[m]-(28+7-starting_from)
    
    c = 1
    if rest>0:
        if is_leap_year(y):  
            c =  days_in_month_leap[m]-rest+1
        else:
            c =  days_in_month[m]-rest+1        
    for _ in range(5):
        
        if _ == 0 :
            for i in range(7):
                if(i<starting_from):
                    if i<rest:
                        print("| {:>2}".format(c), end="")
                        c+=1
                    else:
                        c = 1
                        print("| -", end=" ")
                else:
                    print("| {:>2}".format(c), end="")
                    c+=1
            print("|",end=" ")
        else:
            for i in range(1,8):
                if is_leap_year(y):   
                    if c>days_in_month_leap[m]:
                        print("| -",end=" ")
                        continue
                else:
                    if c>days_in_month[m]:
                        print("| -",end=" ")
                        continue
                print("| {:>2}".format(c), end="")

                c+=1
                    
            print("|",end=" ")
        print()
        print("|---------------------------|")
    print()


# t = int(input())
t = 1

ts = list()
for _ in range(t):
    # i = input()
    i = "1/02/2023 Sun"
    ts.append(i)

for i in ts:
    makeCalender(i)
    
