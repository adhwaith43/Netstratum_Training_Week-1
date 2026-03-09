import django
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from books.serializers import BookSerializer
from books.models import Book
# Create your views here.

# # api view
# class BookListView(APIView):
#     def get(self,request):
#         b=Book.objects.all()
#         books=BookSerializer(b,many=True)
#         return Response(books.data,status=status.HTTP_200_OK)
from django.db.models import Q

#     def post(self,request):
#         book=BookSerializer(data=request.data)
#         if book.is_valid():
#             book.save()
#             return Response(book.data,status=status.HTTP_201_CREATED)


# # # using mixins
from rest_framework import mixins,generics

# class BookList(mixins.ListModelMixin,mixins.CreateModelMixin,generics.GenericAPIView):
#     queryset=Book.objects.all()
#     serializer_class=BookSerializer

#     def get(self,request):
#         return self.list(request)
#     def post(self,request):
#         return self.create(request)
    

# # using generics

# class BookList(generics.ListCreateAPIView):
#     queryset=Book.objects.all()
#     serializer_class=BookSerializer









# # using api views
# from django.http import Http404

# class BookDetail(APIView):
#     def get_object(self,pk):
#         try:
#             return Book.objects.get(pk=pk)
#         except:
#             raise Http404
        
#     def get(self,request,pk):
#         book=self.get_object(pk)
#         b=BookSerializer(book)
#         return Response(b.data,status=status.HTTP_200_OK)

#     def put(self,request,pk):
#         book=self.get_object(pk)
#         b=BookSerializer(book,data=request.data)
#         if b.is_valid():
#             b.save()
#             return Response(b.data,status=status.HTTP_200_OK)
        
#     def delete(self,request,pk):
#         b=self.get_object(pk)
#         b.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)


# # mixins
# class BookDetail(mixins.RetrieveModelMixin,
#                  mixins.UpdateModelMixin,
#                  mixins.DestroyModelMixin,
#                  generics.GenericAPIView):
#     queryset=Book.objects.all()
#     serializer_class = BookSerializer

#     def get(self,request,pk):
#         return self.retrieve(request,pk)

#     def put(self,request,pk):
#         return self.update(request,pk)

#     def delete(self,request,pk):
#         return self.destroy(request,pk)


# # using generics

# class BookDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset=Book.objects.all()
#     serializer_class = BookSerializer




#ViewSets
from rest_framework import viewsets

class BookView(viewsets.ModelViewSet): #Get/Post/GET(id)/Put/Delete
    queryset=Book.objects.all()
    serializer_class = BookSerializer




# SearchAPIView

class SearchView(APIView):
    def get(self,request):
        # query
        query=self.request.query_params.get('search')
        if query:
            b=Book.objects.filter(Q(title__icontains=query)|
                                  Q(author__icontains=query)|
                                  Q(price__icontains=query)|
                                  Q(language__icontains=query))
            if not b.exists(): #query_set empty
                return Response({'message':'no results'},status=status.HTTP_200_OK)
            

            books=BookSerializer(b,many=True)
            return Response(books.data,status=status.HTTP_200_OK)
        else:#keyword empty
            return Response({'message':'no results'},status=status.HTTP_200_OK)