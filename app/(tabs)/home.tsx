import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  useColorScheme,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-wind";
 
import StaticTab from "../components/StaticTab/StaticTab";
import RunningTab from "../components/RunningTab/RunningTab";
import { COLORS } from "../../constants";
import Score from "../components/Score/Score";
import UserInfo from "../components/UserInfo/UserInfo";
import { Stack } from "expo-router";
 
const home = () => {
  return (
    
    <ScrollView contentContainerStyle={{flexGrow:1,backgroundColor: COLORS.gray2 }} scrollEnabled={true}>
      <SafeAreaView>
         <Score />
          <StaticTab station={"push-up"} />
          <StaticTab station={"sit-up"} />
          <RunningTab station={"2.4km"} />
          <UserInfo />
      {/* <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias vel impedit iusto facilis, voluptate nulla aspernatur excepturi. Perspiciatis doloribus praesentium unde? Laborum a iure laboriosam et labore error iusto, id rerum perspiciatis praesentium ipsam quod ut nobis maxime. Aliquid id numquam temporibus explicabo officia tempore, magni maiores ex nulla amet commodi iste totam dignissimos veniam expedita dolores vitae doloribus maxime molestias nostrum quos alias. At, a laborum nisi nemo ducimus error architecto cupiditate porro? Culpa nam illo velit dicta molestiae ex, possimus sint reprehenderit odit dolor ipsum porro voluptatibus soluta eveniet magnam aperiam facere nulla corporis tempora. Temporibus veniam ducimus libero sapiente. Iusto inventore provident odio quas esse maxime doloribus consectetur at libero quaerat quisquam debitis voluptates, ab, mollitia enim ex pariatur fuga. Quas reiciendis suscipit unde, laboriosam asperiores adipisci deleniti, consectetur consequatur ipsa omnis veritatis. Illum velit veniam suscipit possimus distinctio molestias consequuntur accusamus asperiores reiciendis perferendis fuga iure, voluptatem ut! Voluptatem, eum iste. Non, adipisci nesciunt, esse libero incidunt eveniet consectetur, omnis doloremque ullam rerum architecto quo tempore ut facilis! Iure ratione accusamus at recusandae. Aliquam totam voluptatum nostrum rem excepturi aperiam perspiciatis minus ut possimus saepe aliquid est, recusandae delectus sint. Architecto voluptatibus, explicabo eveniet praesentium reiciendis sunt sint reprehenderit sed atque aliquam doloremque quibusdam quos aspernatur tempora, obcaecati dignissimos ratione facere culpa non voluptatum! Labore repellat cum saepe animi quae voluptatum quisquam laboriosam nemo dolor, accusamus hic harum repudiandae, sequi voluptate fuga eaque. Maiores ipsum, voluptatum harum rerum, quasi sapiente molestiae aperiam dolorum praesentium impedit a, sed animi perspiciatis soluta dolore! Nesciunt quod omnis inventore perspiciatis nisi accusantium, tempore at nam rerum placeat deleniti harum quisquam sed error impedit debitis iure, quibusdam corrupti. Fugit aperiam, sed possimus dignissimos recusandae aut hic placeat dolor cumque ab harum nesciunt, natus dolores totam quo dolorum delectus nulla esse est praesentium excepturi ea ad alias pariatur. Nam tempora dolores aut, rem dolor, commodi nisi alias nobis, obcaecati voluptates tempore sequi sed optio quia numquam dolorem facere aliquid accusantium consequatur officia quas cum? Inventore ipsa porro nostrum libero consequuntur officia. Ratione vitae reiciendis nostrum, laudantium corporis porro, minus sed, enim alias aliquam animi nulla reprehenderit qui voluptatum impedit. Consectetur cum, repudiandae expedita veritatis totam commodi reprehenderit pariatur debitis laborum unde. Quasi dolore placeat, rerum blanditiis eveniet hic neque ex animi repudiandae vitae autem incidunt pariatur dolorum! Nemo, esse repellendus! Facilis pariatur fugiat unde mollitia fugit nobis, iusto itaque rerum quisquam soluta earum dignissimos reprehenderit eum, fuga aspernatur, tempora inventore voluptas laudantium quo! Vero possimus laboriosam quibusdam veritatis corrupti aspernatur facere, quasi consequatur est ipsa rem adipisci suscipit reprehenderit deleniti voluptas cum nihil voluptate rerum. Nesciunt accusamus dolorum consequatur id sint, eius repellat quae vitae? Voluptatem tempora pariatur qui sed incidunt, quibusdam magnam quia consectetur, voluptatum omnis similique error excepturi vero alias saepe voluptate sunt dolores voluptatibus facilis animi nemo! Quia inventore fugiat laborum! Mollitia eaque reprehenderit magni amet alias cumque quo tempore laudantium odit! Enim deserunt reprehenderit nostrum officiis. Accusamus repellat voluptatum quae, repellendus aut sed a similique, beatae quo optio saepe nostrum ipsam odit quibusdam, modi libero. Distinctio sequi facilis veniam. Quam expedita magnam, dolores ea sint perferendis minus esse asperiores similique mollitia distinctio alias quos nulla, modi aut, et error aliquid voluptatum! Similique itaque eius cumque officia eaque quod libero, assumenda ab vel incidunt sint deleniti dolorem dicta vero numquam quibusdam pariatur minus. Reiciendis voluptate cupiditate nostrum eveniet quas nisi optio pariatur temporibus perspiciatis odio aliquid dicta possimus enim placeat earum ratione iure aliquam facere, eum quam ducimus commodi! Vero sed, quidem rem architecto esse quisquam quas iusto facere fuga magnam quae eum voluptatibus sunt totam amet cum expedita nostrum atque ratione quia illum cumque accusamus fugiat. Dignissimos perferendis iste in voluptas nisi inventore nostrum atque recusandae ipsa optio natus, adipisci asperiores vel, animi esse illum sit dolores saepe consequuntur quia dolor mollitia. Porro consequuntur perspiciatis, corporis tempore commodi excepturi accusamus delectus eum dolores omnis, iste amet corrupti recusandae dolorum. Temporibus magni ullam placeat voluptatem quisquam aliquam beatae molestiae consectetur id reiciendis asperiores dignissimos iste dolor fugit, quibusdam dolorum illo amet ab doloribus. Laboriosam adipisci amet quasi voluptatum harum tempore optio quae, molestias praesentium maxime ab dolorem veritatis tenetur id unde nemo ut debitis a assumenda modi iste saepe deleniti doloribus. Alias, hic saepe. Modi, voluptates, debitis placeat dignissimos, laborum vel nobis perspiciatis quasi omnis enim praesentium dolore! Officiis autem quasi deserunt dolorum expedita, reiciendis, amet ad facilis a ratione obcaecati aut saepe laborum accusantium itaque similique, voluptatum excepturi delectus ipsum numquam perspiciatis eos quis hic dolore. Accusamus ullam assumenda reprehenderit expedita iste. Nulla accusamus enim saepe quibusdam quod possimus, quasi totam velit voluptatibus aspernatur ut. Cupiditate quas, consectetur et numquam soluta impedit dolor architecto ipsa nobis iure accusantium dolores, corporis ex porro quis sapiente. Officia dolorem voluptates, modi dignissimos inventore aliquid dolore est commodi veniam nihil placeat assumenda nam architecto ipsum minus facilis nostrum fuga voluptatibus debitis adipisci? Molestiae quidem dolorem possimus veniam blanditiis rerum ea. Ex laboriosam ad quas blanditiis quia. Eligendi voluptatum ea numquam facere vitae blanditiis illum, ipsam doloribus quo harum totam, dignissimos autem et necessitatibus architecto veniam asperiores adipisci distinctio? Nostrum modi tempore saepe, debitis facilis quisquam hic dicta? Fugiat facilis magni minus placeat officiis! Delectus nam, hic officiis unde illum soluta quas deleniti alias temporibus, a facere omnis odit, eligendi ab! Error sapiente ipsam quae expedita esse facere, ad suscipit cupiditate ratione quisquam nisi nesciunt aspernatur magni molestias ullam earum reprehenderit doloremque sequi officiis voluptatibus. Eaque ducimus dolor corrupti porro praesentium nisi est, delectus itaque blanditiis provident ipsam illo dignissimos tempora perferendis omnis sapiente corporis nemo ipsum nesciunt quibusdam, ea quo. Odio voluptas ad soluta est at libero cupiditate consectetur, ab exercitationem amet alias vero aut nisi excepturi atque dolor autem, veritatis recusandae facilis maiores provident accusantium dicta possimus. Sequi voluptate sapiente unde neque asperiores, laboriosam illum saepe perspiciatis? Harum ipsum deleniti amet tempora ducimus hic eum repellendus dicta perspiciatis incidunt? Maiores quae quibusdam voluptatibus sunt, tempore officia libero dignissimos quasi eaque ex odio vitae error fugiat sed, molestias quia quidem aspernatur?
      </Text> */}
      </SafeAreaView>
    {/* <SafeAreaView
    style={{  backgroundColor: COLORS.gray2 }}
    >
     
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Score />
          <StaticTab station={"push up"} />
          <StaticTab station={"Sit-ups"} />
          <RunningTab station={"2.4km"} />
          <UserInfo />
        </View>
      
      
     
    </SafeAreaView> */}
    </ScrollView>
  );
};

export default home;
