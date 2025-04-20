import googlesearch

for i in googlesearch.search("Startup related to selling a hardware product that is cheaper version of CCTV", num_results=1):
    link = i
    break

print(link)