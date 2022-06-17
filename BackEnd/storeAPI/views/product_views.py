from rest_framework.decorators import api_view
from rest_framework.response import Response
from storeAPI.models import StoreItems
from storeAPI.serializers import StoreItemsSerializer


# Api funciton to return all items 
@api_view(["GET"])
def getItems(request):
    items = StoreItems.objects.all()
    serializer = StoreItemsSerializer(items, many=True)
    return Response(serializer.data)

# Api function to return single item details by 
@api_view(["GET"])
def getItem(request, pk):
    product = StoreItems.objects.get(_id=pk)
    serializer = StoreItemsSerializer(product, many=False)
    return Response(serializer.data)