<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-white leading-tight">
            Carregamentos
        </h2>
    </x-slot>


    <div class="flex items-center justify-center min-h-screen bg-gray-900">
	<div class="col-span-12">
		<div class="overflow-auto lg:overflow-visible ">
			<table class="table text-gray-400 border-separate space-y-6 text-sm">
				<thead class="bg-gray-800 text-gray-500">
					<tr>
						<th class="p-3 text-center">ID</th>
						<th class="p-3 text-left">Task</th>
						<th class="p-3 text-left">Price</th>
						<th class="p-3 text-left">Status</th>
						<th class="pz-3 text-left">Action</th>
                        
					</tr>
				</thead>
				<tbody id="tasks">
                	<!-- Tasks no arquivo app.js function getUser  -->
				</tbody>
			</table>
		</div>
	</div>
</div>
<style>

</style>

</x-app-layout>