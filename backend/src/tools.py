from googlesearch import search

class Tools:
    def google_search(self, query):
        for i in search(query, num_results=1):
            link = i
            break

        return link

    def other(self, query):
        return "Tell them to pass valid query"