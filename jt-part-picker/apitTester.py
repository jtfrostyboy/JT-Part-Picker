from pcpartpicker import API

api = API()
cpu_data = api.retrieve("cpu")
all_data = api.retrieve_all()

print(cpu_data.to_json())