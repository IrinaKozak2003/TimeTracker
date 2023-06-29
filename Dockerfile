FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Time Tracker.csproj", "./"]
RUN dotnet restore "Time Tracker.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "Time Tracker.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Time Tracker.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Time Tracker.dll"]
