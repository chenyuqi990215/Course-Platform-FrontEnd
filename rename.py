import os
def deal(filepath):
    f = open(filepath,'r+').readlines()
    f_out = open('./tmp.txt','w+')
    for line in f:
        line.replace('47.100.79.77','1.117.107.95')
        f_out.wite(line)
    f_out.close()

def gci(filepath):
    #遍历filepath下所有文件，包括子目录
    files = os.listdir(filepath)
    for fi in files:
        fi_d = os.path.join(filepath,fi) 
        if os.path.isdir(fi_d):
            gci(fi_d)                  
        else:
            deal(os.path.join(filepath,fi_d))

deal('/Users/cyq/WebstormProjects/course-platform/src/components/AddPosting.vue')
