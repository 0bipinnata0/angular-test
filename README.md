ng g m Elements --routing
ng g m Collections --routing
ng g m Views --routing
ng g m Mods --routing

ng g c elements/ElementsHome

# modules Types
Domain wraps up all the components needed to implement one single feature
Routed Same as a 'Domain' module, but thesse components are tied to routes(only displayed when the user is at some particular address)
Routing Defines routing (show TodoList component when a user is at a route of '/todos')
Service Defines services that will be used in multiple parts of the app
Widget Defines some reusable components that will be used in multiple other modules.



npm i semantic-ui-css


ng g c elements/Placeholder 

ng g directive elements/Times


ng g m Shared
ng g c shared/Divider



ng g c elements/Segment
ng g c collections/Table

ng g c collections/Partners
ng g c collections/Companies
ng g c collections/Biography

ng g c collections/Tabs
