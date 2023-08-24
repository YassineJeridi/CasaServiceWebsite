ch_main="permit Residence: »y TipiNerilditi Kimük "
ch_finale=""
while ch_main!="":
    p=ch_main.find(" ")
    aux=ch_main[0:p]
    ch_finale=aux+"  "+ch_finale
    ch_main=ch_main[p+1:len(ch_main)]
print(ch_finale)