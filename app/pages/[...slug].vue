<script setup lang="ts">
const data = await getPageFromPath(useRoute().params["slug"] as string[])
console.log(useRoute().params["slug"])

if (data == null)
    throwError({ statusCode: 404, message: "Nie znaleziono strony" })
if (data?.body == null)
    throwError({ statusCode: 404, message: "Nie znaleziono strony" })


</script>
<template>
    <div>
        <PortableText :blocks="data!.body" />
    </div>
</template>